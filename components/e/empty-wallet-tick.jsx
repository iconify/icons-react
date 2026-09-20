import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zn1_-h4qq.css';
import '../../css/t/ttwa5ubjw.css';
import '../../css/p/plicdh0bi.css';
import '../../css/i/i44_mrbsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zn1_-h4qq"/><path class="ttwa5ubjw"/><path class="plicdh0bi"/><path class="i44_mrbsr"/></g>`,
		"fallback": "reicon:empty-wallet-tick",
	});
}

export default Component;
