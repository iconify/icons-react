import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3h80_bwa.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/z/ze_9ridsy.css';
import '../../css/r/rwdcacbbz.css';
import '../../css/h/h-_hgccgs.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/md64s2bld.css';
import '../../css/b/b7vz4blag.css';
import '../../css/l/l1h43qbrt.css';
import '../../css/y/yjr1k2bag.css';
import '../../css/c/c1g-o68ou.css';
import '../../css/k/k1-a2bbso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGVV9w7dZT" class="m3h80_bwa"/></defs><g class="t_2lkqbxb"><path class="wm-shadow ze_9ridsy"/><path class="rwdcacbbz"/><path class="h-_hgccgs"/><use href="#SVGVV9w7dZT" class="d2kvgvbvc"/><path class="md64s2bld"/><use href="#SVGVV9w7dZT" class="d2kvgvbvc"/><path class="b7vz4blag"/><path class="l1h43qbrt"/><path class="yjr1k2bag"/><path class="c1g-o68ou wm-shine"/><path class="k1-a2bbso wm-deco"/></g>`,
		"fallback": "withicons-sticker:bot",
	});
}

export default Component;
