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
		"content": `<style>.kw355ubnh {
  fill: currentColor;
  d: path("M9.02 3.258a2 2 0 0 1 1.96 0L17.103 6.7c.538.303.876.865.896 1.48L18 8.2V15a2 2 0 0 1-2 2h-3.5a1.5 1.5 0 0 1-1.5-1.5v-2a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v2A1.5 1.5 0 0 1 7.5 17H4a2 2 0 0 1-2-2V8.2l.001-.02c.02-.614.36-1.176.897-1.479zM17 9.823c-.23.111-.488.176-.762.176H3.762c-.274 0-.531-.065-.762-.176V15a1 1 0 0 0 1 1h3.5a.5.5 0 0 0 .5-.5v-2A1.5 1.5 0 0 1 9.5 12h1a1.5 1.5 0 0 1 1.5 1.5v2a.5.5 0 0 0 .5.5H16a1 1 0 0 0 1-1zM10.49 4.13a1 1 0 0 0-.98 0L3.389 7.573A.763.763 0 0 0 3.762 9h12.476a.762.762 0 0 0 .373-1.426z");
}
</style><path class="kw355ubnh"/>`,
		"fallback": "fluent:building-yurt-20-regular",
	});
}

export default Component;
