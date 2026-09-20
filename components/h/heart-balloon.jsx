import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5swbqbnt.css';
import '../../css/l/l3xtuk_0z.css';
import '../../css/y/ypw0jwb6v.css';
import '../../css/b/bsdzavxjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGnXmmVAQw" class="y5swbqbnt"/></defs><g class="l3xtuk_0z"><path class="ypw0jwb6v"/><path class="bsdzavxjo"/><use href="#SVGnXmmVAQw"/><use href="#SVGnXmmVAQw"/><use href="#SVGnXmmVAQw"/></g>`,
		"fallback": "streamline-cyber:heart-balloon",
	});
}

export default Component;
