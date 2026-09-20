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
		"content": `<style>.l9sexrbeg {
  fill: currentColor;
  d: path("M8 20.846V16H3.154V8H8V3.154h8V8h4.846v8H16v4.846zM4.154 11.5h5.102l1.598 2.385l1.677-5.127h.91l1.815 2.742h4.59V9H15V4.154H9V9H4.154zM9 19.846h6V15h4.846v-2.5H14.74l-1.593-2.384l-1.677 5.132h-.915L8.719 12.5H4.154V15H9zM12 12");
}
</style><path class="l9sexrbeg"/>`,
		"fallback": "material-symbols-light:health-metrics-outline-sharp",
	});
}

export default Component;
