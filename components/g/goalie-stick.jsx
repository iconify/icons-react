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
		"content": `<style>.d-vey-b6j {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m17.562 10.443l3.125-7.142q.03-.068.046-.14q.015-.072.017-.146q.001-.074-.012-.147t-.04-.141t-.066-.131t-.091-.116t-.112-.095t-.128-.072q-.137-.06-.286-.063t-.288.052q-.139.054-.247.157t-.167.24l-3.094 7.072l-.884-.442q-.066-.033-.137-.052q-.071-.02-.145-.025t-.147.004t-.143.032t-.134.06t-.12.085t-.101.107t-.079.125l-3.793 7.585H5.5q-2.25 0-2.25 2.25t2.25 2.25h8q.106 0 .209-.03q.102-.029.192-.086t.161-.137t.116-.176l4.5-9.5q.031-.066.049-.136t.022-.144q.004-.073-.006-.145t-.034-.141t-.06-.132t-.085-.117q-.048-.055-.106-.1q-.057-.044-.123-.077z");
}
</style><path class="d-vey-b6j"/>`,
		"fallback": "uix-solid:goalie-stick",
	});
}

export default Component;
