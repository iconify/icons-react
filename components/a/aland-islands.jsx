import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kszgb5bkw.css';
import '../../css/x/x0man4b4w.css';
import '../../css/x/xcr_i7b-g.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kszgb5bkw"/><path class="x0man4b4w"/><path class="xcr_i7b-g"/>`,
		"fallback": "tabler-flags:aland-islands",
	});
}

export default Component;
