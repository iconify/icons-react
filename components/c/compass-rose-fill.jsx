import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.agwnnvbhq {
  fill: currentColor;
  d: path("m249.94 120.24l-27.05-6.76a95.86 95.86 0 0 0-80.37-80.37l-6.76-27a8 8 0 0 0-15.52 0l-6.76 27.05a95.86 95.86 0 0 0-80.37 80.37l-27 6.76a8 8 0 0 0 0 15.52l27.05 6.76a95.86 95.86 0 0 0 80.37 80.37l6.76 27.05a8 8 0 0 0 15.52 0l6.76-27.05a95.86 95.86 0 0 0 80.37-80.37l27.05-6.76a8 8 0 0 0 0-15.52Zm-44.17-11L158.6 97.4l-11.8-47.17a79.88 79.88 0 0 1 58.97 58.97Zm-96.57-59L97.4 97.4l-47.17 11.8a79.88 79.88 0 0 1 58.97-58.97Zm-59 96.57l47.2 11.79l11.8 47.17a79.88 79.88 0 0 1-58.97-58.97Zm96.57 59l11.8-47.17l47.17-11.8a79.88 79.88 0 0 1-58.94 58.93Z");
}
</style><path class="agwnnvbhq"/>`,
		"fallback": "ph:compass-rose-fill",
	});
}

export default Component;
