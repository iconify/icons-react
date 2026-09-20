import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ncq44p-wx.css';
import '../../css/y/y_-j6vyob.css';
import '../../css/q/qbccrwh2p.css';
import '../../css/l/laz_i5qxv.css';
import '../../css/x/xcmkagyfe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ncq44p-wx"/><path class="y_-j6vyob"/><path class="qbccrwh2p"/><path class="laz_i5qxv"/><path class="xcmkagyfe"/></g>`,
		"fallback": "streamline-cyber-color:control-next",
	});
}

export default Component;
