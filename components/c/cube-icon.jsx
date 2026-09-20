import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":296};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bih9pobvs {
  fill: var(--svg-color--a14474, #a14474);
  d: path("M76.802 125.341L38.401 104.59v43.106z");
}

.d1gao0b4f {
  fill: var(--svg-color--ff6492, #ff6492);
  d: path("M256 170.167L128 95v52.696l128 73.448z");
}

.holbn6bek {
  fill: var(--svg-color--141446, #141446);
  d: path("m0 221.144l128-73.448l128 73.448l-128 74.249z");
}

.nlwbwlwyl {
  fill: var(--svg-color--7a77ff, #7a77ff);
  d: path("M38.401 147.696V104.59l89.62-53.213V0L0 74.249v146.895l128-73.448V95z");
}

.wtoelmshz {
  fill: var(--svg-color--ff6492, #ff6492);
  d: path("M256 74.249L128.032 0v51.377L256 125.299v-51.06z");
}

.yiwk1gb6i {
  fill: var(--svg-color--141446, #141446);
  d: path("m256 125.299l-38.391 22.397L128 95.802l-51.198 29.539l-38.401-20.751l89.62-53.213z");
}
</style><path class="wtoelmshz"/><path class="yiwk1gb6i"/><path class="bih9pobvs"/><path class="holbn6bek"/><path class="d1gao0b4f"/><path class="nlwbwlwyl"/>`,
		"fallback": "logos:cube-icon",
	});
}

export default Component;
