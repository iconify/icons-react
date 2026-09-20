import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i3cjifb3b.css';
import '../../css/e/e5mqq8b2d.css';
import '../../css/n/nc0wrwjgz.css';
import '../../css/b/b5axrpttp.css';
import '../../css/w/wkal2fbka.css';
import '../../css/d/dl6jej4bz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i3cjifb3b"/><path class="e5mqq8b2d"/><path class="nc0wrwjgz"/><path class="b5axrpttp"/><path class="wkal2fbka"/><path class="dl6jej4bz"/></g>`,
		"fallback": "streamline-ultimate-color:dropbox-logo",
	});
}

export default Component;
