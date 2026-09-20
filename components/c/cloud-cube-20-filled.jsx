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
		"content": `<style>.ye4nyjbxl {
  fill: currentColor;
  d: path("M10 4c2.731 0 4.317 1.809 4.622 4.036a2 2 0 0 0-.516.175l-3 1.5A2 2 0 0 0 10 11.5V15H5.282C3.469 15 2 13.488 2 11.623s1.47-3.377 3.282-3.377h.071C5.587 5.908 7.183 4 10 4m8.447 6.606l-3-1.5a1 1 0 0 0-.894 0l-3 1.5A1 1 0 0 0 11 11.5v4.004a1 1 0 0 0 .553.894l3 1.5a1 1 0 0 0 .894 0l3-1.5a1 1 0 0 0 .553-.894V11.5a1 1 0 0 0-.553-.894m-6.407 1.126a.5.5 0 0 1 .657-.263l2.303.987l2.303-.987a.5.5 0 0 1 .394.92l-2.197.94V16a.5.5 0 1 1-1 0v-2.67l-2.197-.942a.5.5 0 0 1-.263-.656");
}
</style><path class="ye4nyjbxl"/>`,
		"fallback": "fluent:cloud-cube-20-filled",
	});
}

export default Component;
