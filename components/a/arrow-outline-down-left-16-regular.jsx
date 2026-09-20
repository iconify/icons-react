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
		"content": `<style>.d0uj2o8oo {
  fill: currentColor;
  d: path("M9.03 1.44a1.5 1.5 0 0 1 2.121 0l3.41 3.409a1.5 1.5 0 0 1 0 2.121l-4.027 4.026l1.098 1.099c.75.749.285 2.032-.77 2.128l-8.499.773a1.25 1.25 0 0 1-1.358-1.358l.773-8.5c.096-1.055 1.38-1.52 2.129-.77l1.097 1.097zm1.414.706a.5.5 0 0 0-.707 0l-4.38 4.38a.5.5 0 0 1-.707 0L3.2 5.076a.25.25 0 0 0-.426.153L2 13.73a.25.25 0 0 0 .272.271l8.498-.773a.25.25 0 0 0 .154-.425l-1.45-1.453a.5.5 0 0 1 0-.707l4.38-4.38a.5.5 0 0 0 0-.707z");
}
</style><path class="d0uj2o8oo"/>`,
		"fallback": "fluent:arrow-outline-down-left-16-regular",
	});
}

export default Component;
