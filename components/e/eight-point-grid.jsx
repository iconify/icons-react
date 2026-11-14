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
		"content": `<style>.uf0d6xbzs {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2.5 4.5q0 .829.585 1.414q.586.587 1.415.587t1.415-.587T6.5 4.5t-.585-1.414q-.586-.587-1.415-.587t-1.415.587Q2.5 3.671 2.5 4.5m7.5 0q0-2 2-2t2 2t-2 2t-2-2m9.5-2q-2 0-2 2t2 2t2-2t-2-2M2.5 12q0-.829.585-1.414q.586-.587 1.415-.587t1.415.587T6.5 12t-.585 1.414q-.586.587-1.415.587t-1.415-.587Q2.5 12.829 2.5 12m17-2q-2 0-2 2t2 2t2-2t-2-2m-17 9.5q0-.829.585-1.414q.586-.587 1.415-.587t1.415.587q.585.586.585 1.414t-.585 1.414q-.586.587-1.415.587t-1.415-.587Q2.5 20.329 2.5 19.5m9.5-2q-2 0-2 2t2 2t2-2t-2-2m5.5 2q0-2 2-2t2 2t-2 2t-2-2");
}
</style><path class="uf0d6xbzs"/>`,
		"fallback": "uix-solid:eight-point-grid",
	});
}

export default Component;
