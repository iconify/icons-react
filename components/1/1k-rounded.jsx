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
		"content": `<style>.a7af6_qdx {
  fill: currentColor;
  d: path("m13.423 12.327l2.166 2.225q.05.056.319.14q.29 0 .404-.262t-.085-.478l-1.939-1.99l1.964-1.958q.198-.196.075-.446t-.4-.25q-.079 0-.159.036t-.141.104l-2.204 2.186V9.75q0-.19-.126-.316t-.316-.126t-.316.126t-.126.316v4.5q0 .19.126.316t.316.126t.316-.126t.126-.316zm-4.615-2.135v4.058q0 .19.126.316q.125.126.316.126t.316-.126t.126-.316v-4.5q0-.19-.126-.316t-.316-.126h-1.5q-.19 0-.316.126t-.126.316t.126.316t.316.126zM5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20z");
}
</style><path class="a7af6_qdx"/>`,
		"fallback": "material-symbols-light:1k-rounded",
	});
}

export default Component;
