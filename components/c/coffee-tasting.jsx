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
		"content": `<style>.cli9mvysk {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2.5 7.75h10.342q.534 2 4.158 2q4.25 0 4.25-2.75T17 4.25q-3.624 0-4.158 2H2.5q-.074 0-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141Q1.75 6.926 1.75 7t.014.146t.043.141t.069.13t.094.113q.052.053.113.094t.13.069t.141.043t.146.014M3 11h18q.074 0 .146.014q.073.015.141.043t.13.069q.061.041.113.094q.053.052.094.113t.069.13t.043.141t.014.146l-.002.048Q21.203 20.25 12 20.25t-9.748-8.452q-.01-.149.038-.29t.147-.253t.232-.178t.283-.075z");
}
</style><path class="cli9mvysk"/>`,
		"fallback": "uix-solid:coffee-tasting",
	});
}

export default Component;
