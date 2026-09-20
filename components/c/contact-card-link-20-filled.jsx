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
		"content": `<style>.pw6x69yoo {
  fill: currentColor;
  d: path("M2 5.5A1.5 1.5 0 0 1 3.5 4h13A1.5 1.5 0 0 1 18 5.5v5.837A3.5 3.5 0 0 0 16.5 11h-4a3.5 3.5 0 0 0-3.163 5H3.5A1.5 1.5 0 0 1 2 14.5zm3 3a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0m4 3.199a.95.95 0 0 0-.949-.949H4.95a.95.95 0 0 0-.949.949c0 .847.577 1.585 1.399 1.791l.059.015c.684.17 1.4.17 2.084 0l.06-.015A1.846 1.846 0 0 0 9 11.699M11.5 8a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm1 4a2.5 2.5 0 0 0 0 5h.5a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3h.5a.5.5 0 0 0 0-1zm3.5 0a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H16a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5zm-3.5 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z");
}
</style><path class="pw6x69yoo"/>`,
		"fallback": "fluent:contact-card-link-20-filled",
	});
}

export default Component;
