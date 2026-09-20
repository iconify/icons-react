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
		"content": `<style>.l-qqk7t4k {
  fill: currentColor;
  d: path("M3.616 20q-.691 0-1.153-.462T2 18.384V5.616q0-.691.463-1.153T3.616 4h16.769q.69 0 1.153.463T22 5.616v12.769q0 .69-.462 1.153T20.385 20zM7.5 8.5V16q0 .214.143.357T8 16.5t.357-.143T8.5 16V8.308q0-.348-.23-.578t-.578-.23H6q-.213 0-.357.143T5.5 8t.143.357T6 8.5zm7.75 4.248l2.077 3.514q.067.104.171.17q.104.068.238.068q.27 0 .423-.235q.154-.236 0-.488l-2.351-4.008l2.107-3.565q.135-.233-.003-.468q-.137-.236-.406-.236q-.135 0-.239.067t-.17.171l-1.828 3.11l-1.827-3.11q-.067-.104-.17-.17q-.105-.068-.24-.068q-.268 0-.422.235q-.154.236 0 .488l2.102 3.585l-2.358 3.988q-.135.233.003.468q.137.236.407.236q.134 0 .238-.067q.104-.068.171-.172z");
}
</style><path class="l-qqk7t4k"/>`,
		"fallback": "material-symbols-light:1x-mobiledata-badge-rounded",
	});
}

export default Component;
