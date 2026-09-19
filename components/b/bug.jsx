import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hlerm3brg.css';
import '../../css/m/mgar0-gjb.css';
import '../../css/z/zmfqa13ae.css';
import '../../css/p/puphvnb0h.css';
import '../../css/i/idjc4pbow.css';
import '../../css/l/lkzo6fybb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hlerm3brg"/><path class="mgar0-gjb"/><path class="zmfqa13ae"/><path class="puphvnb0h"/><path class="idjc4pbow"/><path class="lkzo6fybb"/>`,
		"fallback": "fxemoji:bug",
	});
}

export default Component;
