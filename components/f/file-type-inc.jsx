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
		"content": `<style>.f0goeqbfj {
  fill: var(--svg-color--c5c5c5, #c5c5c5);
  d: path("M2 15v5h9v4l7-7l-7-6v4z");
}

.jw_yhbbxl {
  fill: var(--svg-color--c5c5c5, #c5c5c5);
  d: path("M20.414 2H5v28h22V8.586ZM7 28V4h12v6h6v18Z");
}

.slibqdbmi {
  fill: var(--svg-color--gray, gray);
  d: path("M26 29H6V3h14l6 6z");
}
</style><path class="slibqdbmi"/><path class="jw_yhbbxl"/><path class="f0goeqbfj"/>`,
		"fallback": "vscode-icons:file-type-inc",
	});
}

export default Component;
