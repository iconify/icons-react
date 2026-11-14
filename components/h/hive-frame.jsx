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
		"content": `<style>.gg9q4ybds {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M17.5 2.25h-11q-1.76 0-3.005 1.245T2.25 6.5v11q0 1.76 1.245 3.005T6.5 21.75h11q1.76 0 3.005-1.245T21.75 17.5v-11q0-1.76-1.245-3.005T17.5 2.25m-4.366 3.293l1.5.875q1.116.652 1.116 1.944v1.776q0 .238-.038.455q.211.077.422.2l1.5.875q1.116.652 1.116 1.944v1.776q0 1.292-1.116 1.944l-1.5.875q-1.134.662-2.268 0l-1.5-.875q-.201-.118-.366-.256q-.165.138-.366.256l-1.5.875q-1.134.662-2.268 0l-1.5-.875Q5.25 16.68 5.25 15.388v-1.776q0-1.292 1.116-1.944l1.5-.875q.211-.123.422-.2q-.038-.217-.038-.455V8.362q0-1.292 1.116-1.944l1.5-.875q1.134-.661 2.268 0");
}
</style><path class="gg9q4ybds"/>`,
		"fallback": "uix-solid:hive-frame",
	});
}

export default Component;
