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
		"content": `<style>.qllct5s3t {
  fill: currentColor;
  d: path("M5.5 14.5q-.213 0-.356-.144T5 13.999t.144-.356t.356-.143h13q.213 0 .356.144t.144.357t-.144.356t-.356.143zm0-4q-.213 0-.356-.144T5 9.999t.144-.356T5.5 9.5h13q.213 0 .356.144t.144.357t-.144.356t-.356.143z");
}
</style><path class="qllct5s3t"/>`,
		"fallback": "material-symbols-light:drag-handle-rounded",
	});
}

export default Component;
