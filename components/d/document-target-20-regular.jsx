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
		"content": `<style>.tlsi7bdmr {
  fill: currentColor;
  d: path("M6 2a2 2 0 0 0-2 2v6.256l.021-.007c.091-.542.473-.985.979-1.164V4a1 1 0 0 1 1-1h4v3.5A1.5 1.5 0 0 0 11.5 8H15v8a1 1 0 0 1-1 1H9.242a4.5 4.5 0 0 1-.913 1H14a2 2 0 0 0 2-2V7.414a1.5 1.5 0 0 0-.44-1.06l-3.914-3.915A1.5 1.5 0 0 0 10.586 2zm8.793 5H11.5a.5.5 0 0 1-.5-.5V3.207zM6 10.5a.5.5 0 0 0-1 0v.535A3.5 3.5 0 0 0 2.035 14H1.5a.5.5 0 0 0 0 1h.535A3.5 3.5 0 0 0 5 17.965v.535a.5.5 0 0 0 1 0v-.535A3.5 3.5 0 0 0 8.965 15H9.5a.5.5 0 0 0 0-1h-.535A3.5 3.5 0 0 0 6 11.035zm2 4a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-1.5 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0");
}
</style><path class="tlsi7bdmr"/>`,
		"fallback": "fluent:document-target-20-regular",
	});
}

export default Component;
