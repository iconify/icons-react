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
		"content": `<style>.abmgajbxk {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M14.375 2.75h-4.75q-2.848 0-4.861 2.014T2.75 9.625v4.75q0 2.848 2.014 4.861t4.861 2.014h4.75q2.848 0 4.861-2.014t2.014-4.861v-4.75q0-2.848-2.014-4.861T14.375 2.75M12.53 14.78q-.105.106-.243.163T12 15t-.287-.057t-.243-.163l-4-4q-.106-.105-.163-.243t-.057-.287t.057-.287t.163-.243q.052-.053.113-.094t.13-.069t.141-.043T8 9.5t.146.014q.073.015.141.043t.13.069t.113.094L12 13.189l3.47-3.469q.052-.053.113-.094t.13-.069t.141-.043T16 9.5t.146.014q.073.015.141.043t.13.069q.061.041.113.094q.106.105.163.243t.057.287t-.057.287t-.163.243z");
}
</style><path class="abmgajbxk"/>`,
		"fallback": "uix-solid:chevron-down-square",
	});
}

export default Component;
