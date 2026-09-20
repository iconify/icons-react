import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcxdw0blf.css';
import '../../css/r/rsc1xgbvj.css';
import '../../css/n/nno8gebdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kcxdw0blf"/><path class="rsc1xgbvj"/><path class="nno8gebdh"/>`,
		"fallback": "token:acq",
	});
}

export default Component;
