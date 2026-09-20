import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":417};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.q710gy_xw {
  fill: var(--svg-color--393939, #393939);
  d: path("m.001 212.321l127.96 75.637V154.159z");
}

.qfod0cckt {
  fill: var(--svg-color--141414, #141414);
  d: path("m127.961 287.958l127.96-75.637l-127.96-58.162z");
}

.ulpet05ef {
  fill: var(--svg-color--8c8c8c, #8c8c8c);
  d: path("M127.962 0L0 212.32l127.962 75.639V154.158z");
}

.usdncc5sr {
  fill: var(--svg-color--8c8c8c, #8c8c8c);
  d: path("M127.962 416.905v-104.72L0 236.585z");
}

.xu41m_b2y {
  fill: var(--svg-color--343434, #343434);
  d: path("m127.961 0l-2.795 9.5v275.668l2.795 2.79l127.962-75.638z");
}

.zfubpmbvb {
  fill: var(--svg-color--3c3c3b, #3c3c3b);
  d: path("m127.961 312.187l-1.575 1.92v98.199l1.575 4.601l128.038-180.32z");
}
</style><path class="xu41m_b2y"/><path class="ulpet05ef"/><path class="zfubpmbvb"/><path class="usdncc5sr"/><path class="qfod0cckt"/><path class="q710gy_xw"/>`,
		"fallback": "logos:ethereum",
	});
}

export default Component;
