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
		"content": `<style>.bkrft4tst {
  fill: currentColor;
  d: path("M10 8c3.314 0 6-1.343 6-3s-2.686-3-6-3s-6 1.343-6 3s2.686 3 6 3m4.69.016c.47-.235.927-.534 1.31-.896V9h-1.915a1.5 1.5 0 0 0-1.385.923l-2.083 5A1.5 1.5 0 0 0 12.002 17h.469l-.194.776A11.4 11.4 0 0 1 10 18c-3.314 0-6-1.343-6-3V7.12c.383.362.84.661 1.31.896C6.562 8.642 8.222 9 10 9s3.438-.358 4.69-.984M13.112 16a.5.5 0 0 1 .485.621l-.434 1.738c-.121.483.462.827.826.487l4.872-4.548A.75.75 0 0 0 18.35 13h-.404a.5.5 0 0 1-.474-.658l.561-1.684A.5.5 0 0 0 17.56 10h-3.473a.5.5 0 0 0-.462.308l-2.083 5a.5.5 0 0 0 .461.692z");
}
</style><path class="bkrft4tst"/>`,
		"fallback": "fluent:database-lightning-20-filled",
	});
}

export default Component;
