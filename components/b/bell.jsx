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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.g7mztubuq {
  d: path("M7.5 17a1 1 0 1 1 2 0a.5.5 0 0 0 1 0a1 1 0 1 1 2 0a2.5 2.5 0 0 1-5 0");
}

.tczw0-bos {
  d: path("M9 1.5a1 1 0 0 1 2 0V4a1 1 0 1 1-2 0z");
}

.yxkqxtfko {
  fill-rule: evenodd;
  d: path("M18 14.5a3.46 3.46 0 0 0-1.5-2.851V9a6 6 0 0 0-6-6h-1a6 6 0 0 0-6 6v2.649A3.46 3.46 0 0 0 2 14.5A2.5 2.5 0 0 0 4.5 17h11a2.5 2.5 0 0 0 2.5-2.5m-3.5-1.618l.59.265l.053.024c.522.237.857.756.857 1.329a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5c0-.573.335-1.092.857-1.33l.053-.023l.59-.265V9a4 4 0 0 1 4-4h1a4 4 0 0 1 4 4z");
}
</style><g class="cuyn6tgcc"><path class="g7mztubuq"/><path clip-rule="evenodd" class="yxkqxtfko"/><path class="tczw0-bos"/></g>`,
		"fallback": "pepicons-pop:bell",
	});
}

export default Component;
