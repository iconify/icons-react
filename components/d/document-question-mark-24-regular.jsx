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
		"content": `<style>.udmn3sblq {
  fill: currentColor;
  d: path("M18.5 20a.5.5 0 0 1-.5.5h-5.732A6.5 6.5 0 0 1 11.19 22H18a2 2 0 0 0 2-2V9.828a2 2 0 0 0-.586-1.414l-5.829-5.828A2.05 2.05 0 0 0 12.172 2H6a2 2 0 0 0-2 2v7.498a6.5 6.5 0 0 1 1.5-.422V4a.5.5 0 0 1 .5-.5h6V8a2 2 0 0 0 2 2h4.5zm-5-15.379L17.378 8.5H14a.5.5 0 0 1-.5-.5zM1 17.5a5.5 5.5 0 1 0 11 0a5.5 5.5 0 0 0-11 0m4.75 3.25a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0M4.5 16a2 2 0 1 1 4 0c0 .73-.212 1.14-.754 1.708l-.264.27l-.116.124C7.083 18.422 7 18.63 7 19a.5.5 0 0 1-1 0c0-.73.212-1.14.754-1.708l.264-.27l.116-.124c.283-.319.366-.527.366-.898a1 1 0 1 0-2 0a.5.5 0 0 1-1 0");
}
</style><path class="udmn3sblq"/>`,
		"fallback": "fluent:document-question-mark-24-regular",
	});
}

export default Component;
