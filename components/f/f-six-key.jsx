import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/q/qhvovpbja.css';
import '../../css/v/v0sklzfxn.css';
import '../../css/d/dhap0cc7v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGJW0n2dsX"><g class="rohhhzb0l"><rect class="qhvovpbja"/><path class="v0sklzfxn"/><path class="dhap0cc7v"/></g></mask></defs><path mask="url(#SVGJW0n2dsX)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:f-six-key",
	});
}

export default Component;
