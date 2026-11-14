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
		"content": `<style>.ax82rwbus {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M11.501 5.889Q12.6 1.75 18.5 1.75q.074 0 .146.014q.073.015.141.043t.13.069q.061.041.113.094q.053.052.094.113t.069.13t.043.141t.014.146q0 5.918-6.5 6.232v6.052q1.618.151 2.848.971q1.652 1.101 1.652 2.745t-1.652 2.745Q14.091 22.25 12 22.25t-3.598-1.005Q6.75 20.144 6.75 18.5t1.652-2.745q1.23-.82 2.848-.971v-4.052q-6.5-.314-6.5-6.232q0-.074.014-.146q.015-.073.043-.141t.069-.13q.041-.061.094-.113q.052-.053.113-.094t.13-.069t.141-.043q.072-.014.146-.014q4.241 0 6.001 2.139");
}
</style><path class="ax82rwbus"/>`,
		"fallback": "uix-solid:growth-seed-sprout-plant",
	});
}

export default Component;
