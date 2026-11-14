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
		"content": `<style>.bpv6babij {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m14.876 7.416l1.333 2q-1.157.315-2.068 1.225Q12.75 12.032 12.75 14t1.391 3.359T17.5 18.75t3.359-1.391T22.25 14t-1.391-3.359q-.911-.91-2.068-1.225l1.333-2q.062-.092.094-.199q.032-.106.032-.217t-.032-.217q-.032-.107-.094-.199l-1-1.5q-.051-.077-.12-.139q-.068-.063-.15-.106q-.082-.044-.172-.066T18.5 4.75h-2q-.093 0-.182.023q-.09.022-.172.066q-.082.043-.15.106q-.069.062-.12.139l-1 1.5q-.062.092-.094.199q-.032.106-.032.217t.032.217q.032.107.094.199M3.141 10.641Q1.75 12.032 1.75 14t1.391 3.359T6.5 18.75t3.359-1.391T11.25 14t-1.391-3.359T6.5 9.25t-3.359 1.391");
}
</style><path class="bpv6babij"/>`,
		"fallback": "uix-solid:divorce",
	});
}

export default Component;
