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
		"content": `<style>.xb4wqv9ck {
  fill: currentColor;
  d: path("M11.25 13.75a.75.75 0 0 1 .072.976l-.072.084l-1.971 1.971a.75.75 0 0 1-.977.073l-.084-.073l-1.97-1.97a.75.75 0 0 1 .977-1.134l.085.073l.69.691V7.75a.75.75 0 0 1 .647-.744L8.75 7a.75.75 0 0 1 .743.648l.007.102v6.69l.69-.69a.75.75 0 0 1 .976-.073zM1.999 12c0 5.523 4.477 10 10 10s10-4.477 10-10s-4.477-10-10-10s-10 4.477-10 10m15.666 1.677l.085.073a.75.75 0 0 1 .072.976l-.072.084l-1.971 1.971a.75.75 0 0 1-.977.073l-.084-.073l-1.97-1.97a.75.75 0 0 1 .978-1.134l.084.073l.69.691V7.75a.75.75 0 0 1 .647-.743L15.25 7a.75.75 0 0 1 .743.649L16 7.75v6.69l.69-.69a.75.75 0 0 1 .976-.072");
}
</style><path class="xb4wqv9ck"/>`,
		"fallback": "fluent:arrow-circle-down-double-24-filled",
	});
}

export default Component;
