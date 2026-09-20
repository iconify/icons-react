import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.s3mrkd7fs {
  fill: currentColor;
  d: path("M11 1a8 8 0 1 1-.589 15.979q.237-.469.383-.982q.102.003.206.003a7 7 0 1 0-6.997-6.794q-.513.146-.982.383A8 8 0 0 1 11 1m-.5 3a.5.5 0 0 1 .492.41L11 4.5V9h2.5a.5.5 0 0 1 .09.992L13.5 10h-3a.5.5 0 0 1-.492-.41L10 9.5v-5a.5.5 0 0 1 .5-.5M10 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0M4 17a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .5.5m3 0a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .5.5");
}
</style><path class="s3mrkd7fs"/>`,
		"fallback": "fluent:clock-pause-20-regular",
	});
}

export default Component;
