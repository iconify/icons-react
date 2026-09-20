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
		"content": `<style>.tcc10fb3e {
  fill: currentColor;
  d: path("m6.158 12l2.796 2.796q.146.146.153.345t-.153.363q-.166.165-.357.168t-.357-.162l-2.944-2.944q-.242-.243-.242-.566t.242-.565L8.241 8.49q.146-.146.347-.153t.366.16q.16.164.162.353t-.162.354zm1.457 10q-.69 0-1.153-.462T6 20.385V17.5q0-.213.143-.357T6.5 17t.357.143T7 17.5v1h10v-1q0-.213.143-.357T17.5 17t.357.143t.143.357v2.885q0 .69-.462 1.152T16.384 22zm0-20h8.77q.69 0 1.152.463T18 3.616V6.5q0 .214-.143.357T17.5 7t-.357-.143T17 6.5v-1H7v1q0 .214-.143.357T6.5 7t-.357-.143T6 6.5V3.616q0-.691.463-1.153T7.616 2m10.226 10l-2.796-2.796q-.146-.146-.153-.345t.153-.363q.166-.165.357-.168t.357.162l2.944 2.944q.242.243.242.566t-.242.565L15.76 15.51q-.146.146-.347.153t-.367-.16q-.16-.164-.162-.353t.162-.354z");
}
</style><path class="tcc10fb3e"/>`,
		"fallback": "material-symbols-light:developer-mode-rounded",
	});
}

export default Component;
