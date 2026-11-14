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
		"content": `<style>.r27szubwx {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6.5 2.75Q3.25 2.75 3.25 6v8q0 3.122 3 3.245V20q0 .136.048.264q.048.127.138.23q.098.112.232.178q.133.066.282.076t.29-.038q.142-.047.254-.146l3.788-3.314H17.5q3.25 0 3.25-3.25V6q0-3.25-3.25-3.25zm4.97 11.28Q8.5 11.061 8.5 9q0-3.5 3.5-3.5T15.5 9q0 2.061-2.97 5.03q-.105.106-.243.163T12 14.25t-.287-.057t-.243-.163");
}
</style><path class="r27szubwx"/>`,
		"fallback": "uix-solid:chat-pin",
	});
}

export default Component;
