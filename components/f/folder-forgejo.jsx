import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbt53ppzw.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tkynp2b1i.css';
import '../../css/a/aqilmzbtu.css';
import '../../css/l/lthm-cc6j.css';
import '../../css/c/c9h5ngb8b.css';
import '../../css/y/yojzp06dy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbt53ppzw"/><g transform="translate(7.265 5.228)scale(.08531)" class="ft5dv1b6b"><path class="prefix__prefix__orange tkynp2b1i"/><path class="aqilmzbtu prefix__prefix__red"/><circle class="lthm-cc6j prefix__prefix__orange"/><circle class="c9h5ngb8b prefix__prefix__red"/><circle class="prefix__prefix__red yojzp06dy"/></g>`,
		"fallback": "material-icon-theme:folder-forgejo",
	});
}

export default Component;
