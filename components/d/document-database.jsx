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
		"content": `<style>.ds-cpnn2r {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M13.5 1.75H7q-1.346 0-2.298.952T3.75 5v14q0 1.346.952 2.298T7 22.25h5.352q-.602-.812-.602-2V15q0-3.75 6-3.75q1.417 0 2.5.209V8.5q0 .074-.014.146q-.015.073-.043.141t-.069.13t-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014h-4q-2.75 0-2.75-2.75v-4q0-.074.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043q.072-.014.146-.014m.531.22q.105.106.162.243q.057.138.057.287v4q0 1.25 1.25 1.25h4q.149 0 .287.057t.243.163zM17.75 12.5Q13 12.5 13 15v5.25q0 2.5 4.75 2.5t4.75-2.5V15q0-2.5-4.75-2.5m0 3.5q-3.25 0-3.25-1t3.25-1T21 15t-3.25 1m-3.25 4.25v-3.23q1.169.48 3.25.48t3.25-.48v3.23q0 1-3.25 1t-3.25-1m1.25-1.626v1.043q.782.333 2 .333t2-.333v-1.043q-.899.126-2 .126t-2-.126");
}
</style><path class="ds-cpnn2r"/>`,
		"fallback": "uix-solid:document-database",
	});
}

export default Component;
