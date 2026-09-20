import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":382};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.karyh4sga {
  fill: var(--svg-color--fff, #fff);
  d: path("m131.015 127.065l117.088.003l-117.088 115.396z");
}

.mp_xm0wxr {
  fill: var(--svg-color--f7852f, #f7852f);
  d: path("m121.909 247.908l-113.513-.003L121.909 134.32z");
}

.rxquq--3x {
  fill: var(--svg-color--878787, #878787);
  d: path("M.002 257.489h116.672L.002 375.955zM.001 120.581L121.948 1l.061 121.501L.001 244.185zm256 12.152v124.388L131.02 381.188V256.832zm-.044-14.864l-117.087-.003L255.957.723z");
}
</style><path class="karyh4sga"/><path class="rxquq--3x"/><path class="mp_xm0wxr"/>`,
		"fallback": "logos:hhvm",
	});
}

export default Component;
