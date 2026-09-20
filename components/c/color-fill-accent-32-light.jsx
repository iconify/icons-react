import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ek_hnubfo {
  fill: currentColor;
  d: path("M18.797 19.5c-.148.415-.297.948-.297 1.5a4.5 4.5 0 1 0 9 0c0-.395-.076-.78-.174-1.12A2.5 2.5 0 0 1 28.5 22v4a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 26v-4A2.5 2.5 0 0 1 6 19.5h.438l2.606 2.605a4.75 4.75 0 0 0 6.717 0l2.606-2.605z");
}
</style><path class="ek_hnubfo"/>`,
		"fallback": "fluent:color-fill-accent-32-light",
	});
}

export default Component;
