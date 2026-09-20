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
		"content": `<style>.fcy12ypto {
  fill: currentColor;
  d: path("M208 28H88a20 20 0 0 0-20 20v12H48a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h128a20 20 0 0 0 20-20v-20h12a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20M92 52h112v59.72l-9.86-9.86a20 20 0 0 0-28.28 0L103.72 164H92Zm80 152H52V84h16v84a20 20 0 0 0 20 20h84Zm-34.34-40L180 121.66l24 24V164ZM108 88a20 20 0 1 1 20 20a20 20 0 0 1-20-20");
}
</style><path class="fcy12ypto"/>`,
		"fallback": "ph:images-square-bold",
	});
}

export default Component;
