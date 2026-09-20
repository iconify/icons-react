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
		"content": `<style>.ny2xalb-b {
  fill: currentColor;
  d: path("M18.5 20a.5.5 0 0 1-.5.5h-5.732A6.5 6.5 0 0 1 11.19 22H18a2 2 0 0 0 2-2V9.828a2 2 0 0 0-.586-1.414l-5.829-5.828A2.05 2.05 0 0 0 12.172 2H6a2 2 0 0 0-2 2v7.498a6.5 6.5 0 0 1 1.5-.422V4a.5.5 0 0 1 .5-.5h6V8a2 2 0 0 0 2 2h4.5zm-5-15.379L17.378 8.5H14a.5.5 0 0 1-.5-.5zM12 17.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0m-9.5 0c0 .834.255 1.608.691 2.248l5.557-5.557A4 4 0 0 0 2.5 17.5m4 4a4 4 0 0 0 3.309-6.248l-5.557 5.557A4 4 0 0 0 6.5 21.5");
}
</style><path class="ny2xalb-b"/>`,
		"fallback": "fluent:document-none-24-regular",
	});
}

export default Component;
