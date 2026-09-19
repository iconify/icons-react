import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/i/iv6s3f9qu.css';
import '../../css/w/wrts4ibyy.css';
import '../../css/z/zqr328bxb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGii6p8bai"><g class="wwvp95byt"><path class="iv6s3f9qu"/><path class="wrts4ibyy"/><path class="zqr328bxb"/></g></mask></defs><path mask="url(#SVGii6p8bai)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:beach-umbrella",
	});
}

export default Component;
