import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":381};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.attl0qbwc {
  fill: var(--svg-color--f7852f, #f7852f);
  d: path("m121.909 246.908l-113.513-.003L121.909 133.32z");
}

.id_t-lbqe {
  fill: var(--svg-color--868686, #868686);
  d: path("M.002 256.489h116.672L.002 374.955zM.001 119.581L121.948 0l.061 121.501L.001 243.185zm256 12.152v124.388L131.02 380.188V255.832z");
}

.iyanq_bel {
  fill: var(--svg-color--fff, #fff);
  d: path("m131.015 126.065l117.088.003l-117.088 115.396z");
}
</style><path class="iyanq_bel"/><path class="id_t-lbqe"/><path class="attl0qbwc"/>`,
		"fallback": "logos:hack",
	});
}

export default Component;
