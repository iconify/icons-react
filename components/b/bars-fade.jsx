import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/ql9ledqyz.css';
import '../../css/f/fej-fccjd.css';
import '../../css/d/d1afhdbwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="ql9ledqyz"><animate id="SVG9ovaHbIP" fill="freeze" attributeName="opacity" begin="0;SVGa89dAd4w.end-0.25s" dur="0.75s" values="1;.2"/></rect><rect opacity=".4" class="fej-fccjd"><animate fill="freeze" attributeName="opacity" begin="SVG9ovaHbIP.begin+0.15s" dur="0.75s" values="1;.2"/></rect><rect opacity=".3" class="d1afhdbwl"><animate id="SVGa89dAd4w" fill="freeze" attributeName="opacity" begin="SVG9ovaHbIP.begin+0.3s" dur="0.75s" values="1;.2"/></rect>`,
		"fallback": "svg-spinners:bars-fade",
	});
}

export default Component;
