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
		"content": `<style>.io8ptbbys {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6.5 2.75Q3.25 2.75 3.25 6v8q0 3.122 3 3.245V20q0 .136.048.264q.048.127.138.23q.098.112.232.178q.133.066.282.076t.29-.038q.142-.047.254-.146l3.788-3.314H17.5q3.25 0 3.25-3.25V6q0-3.25-3.25-3.25zm5.129 10.902Q8 11.586 8 9q0-2.5 2.5-2.5q.89 0 1.5.523q.61-.523 1.5-.523q1.25 0 1.875.625T16 9q0 2.586-3.629 4.652q-.085.048-.179.073T12 13.75t-.192-.025t-.179-.073");
}
</style><path class="io8ptbbys"/>`,
		"fallback": "uix-solid:chat-heart",
	});
}

export default Component;
