import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":416};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.e0l8_jbqo {
  d: path("M170.667 0H256v415.289h-85.333zM0 0h85.333v415.289H0z");
}
</style><path class="e0l8_jbqo"/>`,
		"fallback": "logos:elevenlabs-icon",
	});
}

export default Component;
