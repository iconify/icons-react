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
		"content": `<style>.w19vddy1w {
  fill: currentColor;
  d: path("M224 128H32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m0 48H96v-32h128zM201 60.08c8-14.23 7.42-21.71 6.36-24.91a7.8 7.8 0 0 0-2.64-3.86a8 8 0 1 1 6.5-14.62a22.57 22.57 0 0 1 11.32 13.44c3.36 10.14.81 22.85-7.6 37.79c-8 14.23-7.42 21.72-6.36 24.92a7.8 7.8 0 0 0 2.64 3.85a8 8 0 1 1-6.5 14.62a22.53 22.53 0 0 1-11.32-13.44c-3.33-10.14-.78-22.87 7.6-37.79m-40 0c8-14.23 7.42-21.71 6.36-24.91a7.8 7.8 0 0 0-2.64-3.86a8 8 0 1 1 6.5-14.62a22.57 22.57 0 0 1 11.32 13.44c3.36 10.14.81 22.85-7.6 37.79c-8 14.23-7.42 21.72-6.36 24.92a7.8 7.8 0 0 0 2.64 3.85a8 8 0 1 1-6.5 14.62a22.53 22.53 0 0 1-11.32-13.44c-3.33-10.14-.78-22.87 7.6-37.79");
}
</style><path class="w19vddy1w"/>`,
		"fallback": "ph:cigarette-fill",
	});
}

export default Component;
