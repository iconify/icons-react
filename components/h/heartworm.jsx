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
		"content": `<style>.rc2zsybpg {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3.991 13.281q2.282 3.361 7.559 7.319q.048.036.102.064t.111.048q.057.019.117.028t.12.01q.06 0 .12-.01q.06-.009.117-.028t.111-.048q.054-.028.102-.064q6.618-4.964 8.527-8.99q-3.386-1.14-5.947 1.42q-3.53 3.531-7.06 0q-1.2-1.199-2.288-.927q-.819.204-1.691 1.178m-.799-1.331Q2.25 10.131 2.25 8.5q0-2.498 1.657-4.155Q5.502 2.75 7.75 2.75q2.402 0 4.25 2.24q1.848-2.24 4.25-2.24q2.248 0 3.843 1.595Q21.75 6.002 21.75 8.5q0 .829-.243 1.705q-4.292-1.48-7.537 1.765q-2.47 2.469-4.94 0q-1.8-1.801-3.712-1.323q-1.085.272-2.126 1.303");
}
</style><path class="rc2zsybpg"/>`,
		"fallback": "uix-solid:heartworm",
	});
}

export default Component;
