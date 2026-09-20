import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ubcj8abey {
  fill: currentColor;
  d: path("M5.5 3H6v3.689a2.5 2.5 0 0 1-.34 1.26l-2.215 3.795A1.5 1.5 0 0 0 4.741 14h6.518a1.5 1.5 0 0 0 1.296-2.256L10.34 7.95A2.5 2.5 0 0 1 10 6.689V3h.5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1M7 6.689V3h2v3.689a3.5 3.5 0 0 0 .477 1.764l.32.547H6.203l.32-.547A3.5 3.5 0 0 0 7 6.689M5.62 10h4.76l1.31 2.248a.5.5 0 0 1-.431.752H4.74a.5.5 0 0 1-.432-.752z");
}
</style><path class="ubcj8abey"/>`,
		"fallback": "fluent:beaker-16-regular",
	});
}

export default Component;
