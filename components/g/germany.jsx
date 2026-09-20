import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omtdxibhu.css';
import '../../css/f/fsljy5blq.css';
import '../../css/d/dv76i6dzk.css';
import '../../css/s/snp287xku.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omtdxibhu"/><path class="fsljy5blq"/><path class="dv76i6dzk"/><path class="snp287xku"/>`,
		"fallback": "streamline-emojis:germany",
	});
}

export default Component;
