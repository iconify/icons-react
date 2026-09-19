import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgpzimtyu.css';
import '../../css/q/qulyerb_t.css';
import '../../css/v/vddp-gbtw.css';
import '../../css/d/dpm5hf-1w.css';
import '../../css/u/umy3w9bnm.css';
import '../../css/a/ahbf3vjsr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgpzimtyu"/><circle class="qulyerb_t"/><circle class="vddp-gbtw"/><circle class="dpm5hf-1w"/><circle class="umy3w9bnm"/><circle class="ahbf3vjsr"/>`,
		"fallback": "carbon:chart-scatter",
	});
}

export default Component;
