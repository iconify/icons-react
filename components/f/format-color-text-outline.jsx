import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.sisfprb3n {
  fill: currentColor;
  d: path("M2 24v-4h20v4zm3.5-7l5.25-14h2.5l5.25 14h-2.4l-1.25-3.6H9.2L7.9 17zm4.4-5.6h4.2l-2.05-5.8h-.1z");
}
</style><path class="sisfprb3n"/>`,
		"fallback": "material-symbols:format-color-text-outline",
	});
}

export default Component;
